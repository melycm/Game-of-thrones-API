$(function(){
    function getNames(page) {
        
        $.get("https://www.anapioficeandfire.com/api/characters?page=" + page.toString() + "&pageSize=10")
        .done(function(response){
            for(let i = 0; i < 10; i++){

                var myAllegiances = response[i].allegiances;

                if(myAllegiances.length > 0)
                {
                    $.get(myAllegiances[0])
                    .done(function(houseResponse){
                        console.log(" this house belongs to: " + response[i].name + " -->" +  houseResponse.name)

                        var p = document.createElement("a");
                        var name = document.createTextNode(response[i].name + " " + "--" + " " + houseResponse.name);
                        p.appendChild(name);
                        p.title = "title";
                        p.href = response[i].allegiances
                        p.target = "_blank"
                        document.body.appendChild(p);

                        // var p = document.createElement("p");
                        // var name = document.createTextNode(response[i].name + " " + "--" + " " + houseResponse.name);
                        // p.appendChild(name);
                        // document.body.appendChild(p);
                    })
                    .fail(function(anotherError){

                    })

                    console.log(response[i].allegiances)
                }

            }
           
        })
        .fail(function(error){
                console.log("error");
        })
    }

    for (var i=1; i <= 214; i++) {
        getNames(i)
    }

});