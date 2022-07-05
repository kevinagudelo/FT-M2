$("#boton").click(()=> {
     var lista = $("#lista")
    $.get("http://localhost:5000/amigos", data => {
        for (let index = 0; index < data.length; index++) {
           lista.append(`<li>${data[index].name}</li>`) 
            
        }
    })
})

$("#search").click(()=> {
    let idAmigo = $("#input").val()
    console.log("hola")
    $.get("http://localhost:5000/amigos/"+idAmigo, data => {
        $("#amigo").text(data.name)
    })
})

$("#delete").click(()=> {
    let idDelete = $("#inputDelete").val()
    $.ajax({
        url: "http://localhost:5000/amigos/"+idDelete,
        type : "DELETE",
        success: (data) => {
            $("#success").text("Amigo eliminado")
        }
    })
})