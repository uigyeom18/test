
// 내용 접고 피기
let bDisplay = true; 
function doDisplay(){ 	
    let con = document.getElementById("myDIV"); 	
    if(con.style.display=='none'){ 		
        con.style.display = 'block'; 	
    }else{ 		
        con.style.display = 'none'; 	
    } 
} 

// window.location.href ="http://127.0.0.1:5500/affter_main.html"

const logout = document.querySelector(".logout");
logout.addEventListener("click",()=>{
    window.location.href ="http://127.0.0.1:5500/index.html"
})

function navigateToTeamPage(linkClass) {
    window.location.href = `team.html?team=${linkClass}`;
  }
