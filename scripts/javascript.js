listar(); 

function guardar(e){
    e.preventDefault();
    let titulo = document.getElementById("titulo").value;
    let autor = document.getElementById("autor").value;
    let editorial = document.getElementById("editorial").value;
    
    
    if(titulo == null||titulo ==''){
        alert("ingrese titulo del libro");
        return;
    }
    let libro= {
        titulo: titulo,
        autor: autor,
        editorial:editorial,
    };
    
   if(localStorage.getItem('libros')==null){
    let libros=[];
    libros.push(libro);
    localStorage.setItem('libros', JSON.stringify(libros));
   }else{
    let libros= JSON .parse(localStorage.getItem('libros'));
    libros.push(libro);
    localStorage.setItem('libros', JSON.stringify(libros));
   }
   listar();
   document.getElementById("form-libro").reset();
}
function listar(){
    let listaLibros;
    if(localStorage.getItem('libros')==null){
        listaLibros=[];
    
    } else {
        listaLibros=JSON.parse(localStorage.getItem('libros'));
    }
    var html ="";

    listaLibros.forEach(function(element, index){
      html += "<tr>";  
      html += "<td>"+ (index+1) +"</td>";  
      html += "<td>"+ element.titulo + "</td>";
      html += "<td>"+ element.autor + "</td>";
      html += "<td>"+ element.editorial + "</td>";
      html += '<td class = "text-center"><button class ="btn btn-warning mr-2" onclick="editar('+index+')">editar</button><button class="btn btn-danger" onclick="eliminar('+index+')">eliminar</button></td>';
      html += "</tr>";
    });
    
    document.querySelector("#contenido tbody").innerHTML = html;
}
function eliminar (index){
    let listaLibros;
    if(localStorage.getItem('libros')==null){
        listaLibros=[];
    
    } else {
        listaLibros=JSON.parse(localStorage.getItem('libros'));
    }
    listaLibros.splice(index,1);
    localStorage.setItem('libros',JSON.stringify(listaLibros));
    listar();

}
