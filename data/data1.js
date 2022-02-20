document.addEventListener('DOMContentLoaded', function(){
    document.getElementById('v_1').innerHTML = vopros_1;
    document.getElementById('v_2').innerHTML = vopros_2;
    document.getElementById('v_3').innerHTML = vopros_3;
    document.getElementById('tema').innerHTML = test;
});
function sled_vopr(){
    if(document.getElementById('vopros2').style.display == "block"){
        document.getElementById('vopros2').style.display = "none";
        document.getElementById('vopros3').style.display = "block";
        document.getElementById('kn_sl').style.display = "none";
        document.getElementById('kn_pr').style.display = "block";
    }
    if(document.getElementById('vopros1').style.display == "block"){
        document.getElementById('vopros1').style.display = "none";
        document.getElementById('vopros2').style.display = "block";
    }
}
function proverit(){
otv_uch_1 = document.getElementById('z_1').value;
otv_ucgenika_1 = otv_uch_1;
otv_uch_1 = kodirov(otv_uch_1);
otv_uch_2 = document.getElementById('z_2').value;
otv_ucgenika_2 = otv_uch_2;
otv_uch_2 = kodirov(otv_uch_2);
otv_uch_3 = document.getElementById('z_3').value;
otv_ucgenika_3 = otv_uch_3;
otv_uch_3 = kodirov(otv_uch_3);
ball = 0;
document.getElementById('vopros3').style.display = "none";
document.getElementById('kn_pr').style.display = "none";
if(otv_uch_1 == pr_otv_zadachi_1){
    ball +=1;
    otveti = "<span id='vo'>Вопрос 1. Вы ответили верно. Ваш ответ: "+otv_ucgenika_1+"</span>";
} else {
    otveti = "<span id='nvo'>Вопрос 1. Вы ответили не верно. Ваш ответ: "+otv_ucgenika_1+"</span>"; 
}
if(otv_uch_2 == pr_otv_zadachi_2){
    ball +=1;
    otveti += "<br><span id='vo'>Вопрос 2. Вы ответили верно. Ваш ответ: "+otv_ucgenika_2+"</span>";
} else {
    otveti += "<br><span id='nvo'>Вопрос 2. Вы ответили не верно. Ваш ответ: "+otv_ucgenika_2+"</span>"; 
}
if(otv_uch_3 == pr_otv_zadachi_3){
    ball +=1;
    otveti += "<br><span id='vo'>Вопрос 3. Вы ответили верно. Ваш ответ: "+otv_ucgenika_3+"</span>";
} else {
    otveti += "<br><span id='nvo'>Вопрос 3. Вы ответили не верно. Ваш ответ: "+otv_ucgenika_3+"</span>";
}
vsego_zadach = 3;
procent_vip = ball/vsego_zadach * 100;
procent_vip = procent_vip.toFixed();
document.getElementById('rezultat').innerHTML = "<span id='ot'>Задания выполнены верно на "+procent_vip+"%.</span><br><br>"+otveti;
}
function proverit(){
    otv_uch_1 = document.getElementById('z_1').value;
    otv_ucgenika_1 = otv_uch_1;
    otv_uch_1 = kodirov(otv_uch_1);
    otv_uch_2 = document.getElementById('z_2').value;
    otv_ucgenika_2 = otv_uch_2;
    otv_uch_2 = kodirov(otv_uch_2);
    otv_uch_3 = document.getElementById('z_3').value;
    otv_ucgenika_3 = otv_uch_3;
    otv_uch_3 = kodirov(otv_uch_3);
    ball = 0;
    document.getElementById('vopros3').style.display = "none";
    document.getElementById('kn_pr').style.display = "none";
    if(otv_uch_1 == pr_otv_zadachi_1){
        ball +=1;
        otveti = "<span id='vo'>Вопрос 1. Вы ответили верно. Ваш ответ: "+otv_ucgenika_1+"</span>";
    } else {
        otveti = "<span id='nvo'>Вопрос 1. Вы ответили не верно. Ваш ответ: "+otv_ucgenika_1+"</span>"; 
    }
    if(otv_uch_2 == pr_otv_zadachi_2){
        ball +=1;
        otveti += "<br><span id='vo'>Вопрос 2. Вы ответили верно. Ваш ответ: "+otv_ucgenika_2+"</span>";
    } else {
        otveti += "<br><span id='nvo'>Вопрос 2. Вы ответили не верно. Ваш ответ: "+otv_ucgenika_2+"</span>"; 
    }
    if(otv_uch_3 == pr_otv_zadachi_3){
        ball +=1;
        otveti += "<br><span id='vo'>Вопрос 3. Вы ответили верно. Ваш ответ: "+otv_ucgenika_3+"</span>";
    } else {
        otveti += "<br><span id='nvo'>Вопрос 3. Вы ответили не верно. Ваш ответ: "+otv_ucgenika_3+"</span>";
    }
    vsego_zadach = 3;
    procent_vip = ball/vsego_zadach * 100;
    procent_vip = procent_vip.toFixed();
    document.getElementById('rezultat').innerHTML = "<span id='ot'>Задания выполнены верно на "+procent_vip+"%.</span><br><br>"+otveti;
    }