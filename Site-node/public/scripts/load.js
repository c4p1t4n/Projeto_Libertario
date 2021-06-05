function loadindex(){
    var idUsuario = sessionStorage.id_usuario_meuapp
    console.log(idUsuario)
    if (idUsuario == null) {
        
    }
    else{
        menu.innerHTML = `  <div class="itens_menu">
            <a class="menu_titulo" href="./index.html">Home</a>
            <ul class="list_itens" >
                <li class="li_item item_divisor"><a class="link_ancor" href="./favoritos.html">Favorites</a>
                
                <li class="li_item item_divisor"><a class="link_ancor" href="./library.html">Library</a></li>
                <li class="li_item "><a class="link_ancor" href="./timeline.html">Timeline</a></li>                                                   
                <li class="li_item "><a class="link_ancor" href="./metricas.html">Analitics</a></li>
                <li class="li_item "><a class="link_ancor" onclick="sair()" >Exit</a></li>
            </ul>
        </div>            
         `



    }
}

function load() {
    var idUsuario = sessionStorage.id_usuario_meuapp
    if (idUsuario == null) {
        alert("Efetue  login")
        window.location.href = 'login.html';
    }
    else {
        menu.innerHTML = `  <div class="itens_menu">
            <a class="menu_titulo" href="./index.html">Home</a>
            <ul class="list_itens" >
                <li class="li_item item_divisor"><a class="link_ancor" href="./favoritos.html">Favorites</a>
                
                <li class="li_item item_divisor"><a class="link_ancor" href="./library.html">Library</a></li>
                <li class="li_item "><a class="link_ancor" href="./timeline.html">Timeline</a></li>                                                   
                <li class="li_item "><a class="link_ancor" href="./metricas.html">Analitics</a></li>
                <li class="li_item "><a class="link_ancor" onclick="sair()" >Exit</a></li>
            </ul>
        </div>
        
         `




    }
}