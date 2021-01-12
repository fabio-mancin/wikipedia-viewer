 $(document).ready(function() {
  $("#search").click(function(){
    const query = $("#input").val();
    const url = `https://en.wikipedia.org/w/api.php?action=opensearch&format=json&origin=*&search=${query}`
    const target = $(".results");
    $.ajax({url: url, success: function(result){
      console.log(result);
      result[1].forEach((e,i)=>{
        const link = result[3][i];
        let newLine = `<h3>${e}</h3><a href="${link}"><p>${link}</p></a>`;
        target.append(newLine);
      })
    }});
  })
});