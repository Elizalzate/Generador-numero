let numMinimo = document.getElementById('minNumero').value;
let numMaximo = document.getElementById('maxNumero').value;
let numero = document.getElementById('numero').value;
let btnGenerar = document.getElementById('btnGenerar');


const generarNumero = (numMinimo, numMaximo) => {
    if(numMinimo === '' || numMaximo === ''){
        alert('Debes llenar todos los datos');
        if(numMinimo ===''){
            document.getElementById('minNumero').focus();
        }
        else if(numMaximo ===''){
            document.getElementById('maxNumero').focus({preventScroll:true});
        }
        
    }
    else{
        document.getElementById('numero').value = Math.random() * (numMaximo - numMinimo) + numMinimo;
    }
    
};

btnGenerar.addEventListener('click', () => {
    generarNumero(numMinimo, numMaximo);
})