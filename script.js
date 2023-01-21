
function add(){

    const today = new Date().toLocaleDateString('pt-br').slice(0, -5);
    

    const dayExists = nlwSetup.dayExists(today);


    if(dayExists) {
        // alert(new Date().toLocaleDateString('pt-br').slice(0, -5)) <- este código foi apenas um teste par exibir um alerta contendo a data de hoje no formato dia/mês (conseguimos retirar o ano através do slice, o parametro -5 é a posição do conteúdo que será recortado ).
        alert("Dia já registrado")
        return
    }

    alert("adicionado com sucesso!");

    nlwSetup.addDay(today);
}

function save(){
    localStorage.setItem('NLWSetup@habits', JSON.stringify(nlwSetup.data))

}

const form = document.querySelector('#form-habits');
const nlwSetup = new NLWSetup(form);

const button = document.querySelector('header button')
// o querySelector vai pegar uma tag do html (no caso, o botão dentro do header).

button.addEventListener('click', add);

// o addEventListener vai adicionar funcionalidades ao botão.

form.addEventListener("change", save);

const data = JSON.parse(localStorage.getItem("NLWSetup@habits"))

/* const data = {
    run: ['01-01', '01-02', '01-06'],
    water: ['01-01', '01-02','01-03','01-04','01-05','01-06','01-07',],
    food: ['01-01', '01-06'],
    muscle: ['01-01', '01-04', '01-07'],
    study: ['01-03', '01-04', '01-07']

};

 o const data acima é um objeto que contém um array por dentro */


nlwSetup.setData(data);
nlwSetup.load(); 