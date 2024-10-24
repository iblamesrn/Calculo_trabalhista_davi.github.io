function calcular() {
    var valorHora = parseFloat(document.getElementById('valorHora').value);
    var QTEhora = parseFloat(document.getElementById('QTEhora').value);
    var outrasDEdu = parseFloat(document.getElementById('outrasDEdu').value) || 0;

    if (QTEhora === 0) {
        window.location.reload();
        return;
    }

    var slBruto = valorHora * QTEhora;
    var slBruto2 = 0;
    var slBruto3 = 0;
    var desINSS = 0;

    if (slBruto <= 1320) {
        desINSS = slBruto * 0.075;
        slBruto2 =  slBruto - desINSS;
    }
    else if(slBruto >= 1320.01 & slBruto <= 2571.29)
    {
        desINSS = slBruto * 0.09;
       slBruto2 = slBruto - desINSS;
    }
    else if(slBruto >= 2571.30 & slBruto <= 3856.94)
    {
        desINSS = slBruto * 0.12;
       slBruto2 = slBruto - desINSS;
    }
    else if(slBruto >= 3856.95 & slBruto <= 7507.49 )
        {
            desINSS = slBruto * 0.14;
           slBruto2 = slBruto - desINSS;
        }

    var desIRPF = 0;

    if (slBruto2 <= 2112)
     {
        desIRPF = 0;
        slBruto3 = slBruto2 - 0;
    } 
    else if (slBruto2 <= 2826.65) 
    {
        desIRPF = slBruto * 0.075;
        slBruto3 = slBruto2 - desIRPF;
    } 
    else if (slBruto2 <= 3751.06)
     {
        desIRPF = slBruto * 0.15;
        slBruto3 = slBruto2 - desIRPF;
    } 
    else if (slBruto2 <= 4664.68) 
    {
        desIRPF = slBruto * 0.225;
        slBruto3 = slBruto2 - desIRPF;
    } 
    else
     {
        desIRPF = slBruto2 * 0.275;
        slBruto3 = slBruto2 - desIRPF;
    }

    var descVT = 0;
    var sim = document.getElementById('sim');

    if (sim.checked) {
        descVT = slBruto3 * 0.06;
    }

    var slLiquido = slBruto3 - descVT - outrasDEdu;

    document.getElementById('slBrutoR').textContent = slBruto.toFixed(2);
    document.getElementById('descINSSR').textContent = desINSS.toFixed(2);
    document.getElementById('descIRPFR').textContent = desIRPF.toFixed(2);
    document.getElementById('descVTR').textContent = descVT.toFixed(2);
    document.getElementById('outrasDedu').textContent = outrasDEdu.toFixed(2);
    document.getElementById('slLIquidoR').textContent = slLiquido.toFixed(2);
}
