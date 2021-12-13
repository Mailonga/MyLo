var gen = document.getElementById('gen');
var quant = document.getElementById('quant');

var list = [];
var quant_gen = [];


function grp(){
    if (gen.value == '') {
        alert("Campos Gênero em Branco!");
    }if(quant.value == ''){
        alert("Campos Quantidade em Branco!");
    }else{
    list.push(gen.value);
    quant_gen.push(quant.value);
    console.log(list);
    alert("Gênero:  " + gen.value + "       " +"Quantidade:  " + Number(quant.value));
    }
}

function graf(){
    const ctx = document.getElementById('myChart');
    const myChart = new Chart(ctx, {
    type: 'pie',
    data: {
        labels: list,
        datasets: [{
            label: '# of Votes',
            data: quant_gen,
            backgroundColor: [
                'rgba(255, 0, 0, 0.8)',
                'rgba( 0, 0, 255, 1 )',
                'rgba( 165, 42, 42, 1 )',
                'rgba(85, 107, 47, 1 )',
                'rgba(139, 0, 0, 1)',
                'rgba(47, 79, 79, 1 )'
            ],
            borderColor: [
                'rgba(255, 0, 0, 0.8)',
                'rgba(0, 0, 255, 1)',
                'rgba(165, 42, 42, 1)',
                'rgba(85, 107, 47, 1)',
                'rgba(139, 0, 0, 1)',
                'rgba(47, 79, 79, 1)'
            ],
            borderWidth: 1
        }]
    },
    options: {
        scales: {
            y: {
                beginAtZero: true
            }
        }
    }
});
}