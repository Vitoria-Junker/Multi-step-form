
function checkInfo() {

    const monthlyPlan = document.querySelector('.monthly-plan');
    const summaryY = document.querySelector('.yearly-summary');
    const summary = document.querySelector('.monthly-summary');
    const addOns = document.querySelector('.monthly-add-ons');
    const addOnsY = document.querySelector('.yearly-add-ons');
    const secondStep = document.getElementById('select-plan');
    const selectPlan = document.querySelector('.yearly-plan');
    const firstStep = document.getElementById('your-info');
    const yourInfo = document.querySelector('.steps-info');
    const fourthStep = document.getElementById('summary');
    const thirdStep = document.getElementById('add-ons');
    const thankYou = document.querySelector('.thanks');




    if (firstStep.checked === true) {
        monthlyPlan.style.display = "none";
        selectPlan.style.display = "none";
        yourInfo.style.display = "block";
        thankYou.style.display = "none";
        summaryY.style.display = "none";
        summary.style.display = "none";
        addOnsY.style.display = "none";
        addOns.style.display = "none";
    }


    if (secondStep.checked === true) {
        monthlyPlan.style.display = "none";
        selectPlan.style.display = "flex";
        summaryY.style.display = "none";
        yourInfo.style.display = "none";
        thankYou.style.display = "none";
        summary.style.display = "none";
        addOnsY.style.display = "none";
        addOns.style.display = "none";
    }

    if (thirdStep.checked === true) {
        monthlyPlan.style.display = "none";
        selectPlan.style.display = "none";
        summaryY.style.display = "none";
        thankYou.style.display = "none";
        yourInfo.style.display = "none";
        summary.style.display = "none";
        addOnsY.style.display = "none";
        addOns.style.display = "flex";


    }

    if (fourthStep.checked === true) {
        monthlyPlan.style.display = "none";
        selectPlan.style.display = "none";
        summaryY.style.display = "none";
        yourInfo.style.display = "none";
        thankYou.style.display = "none";
        addOnsY.style.display = "none";
        summary.style.display = "flex";
        addOns.style.display = "none";
    }
    return;
}


const goBack2 = document.getElementById('go-back-2');
const goBack = document.getElementById('go-back-1');


goBack.addEventListener("click", function () {
    showYourInfo();
});

goBack2.addEventListener("click", function () {
    showYourInfo();
});

function showYourInfo() {
    const monthlyPlan = document.querySelector('.monthly-plan');
    const selectPlan = document.querySelector('.yearly-plan');
    const firstStep = document.getElementById('your-info');
    const yourInfo = document.querySelector('.steps-info');
    
    monthlyPlan.style.display = "none";
    selectPlan.style.display = "none";
    yourInfo.style.display = "block";
    firstStep.checked = true;
}




const goBackM = document.getElementById('go-back-m')
goBackM.addEventListener("click", function () {
    showSelectM();
});

function showSelectM() {
    const monthlyPlan = document.querySelector('.monthly-plan');
    const secondStep = document.getElementById('select-plan');
    const addOns = document.querySelector('.monthly-add-ons');

    monthlyPlan.style.display = "flex";
    addOns.style.display = "none";
    secondStep.checked = true;
}

const goBackY = document.getElementById('go-back-y')
goBackY.addEventListener("click", function () {
    showSelectY();
});

function showSelectY() {

    const selectPlan = document.querySelector('.yearly-plan');
    const addOnsY = document.querySelector('.yearly-add-ons');
    const secondStep = document.getElementById('select-plan');


    selectPlan.style.display = "flex";
    addOnsY.style.display = "none";
    secondStep.checked = true;
}


const goBackAdd = document.getElementById('go-to-add');
const goBackAddM = document.getElementById('go-add-m')

goBackAdd.addEventListener("click", function () {
    showAddOnsY();
});

goBackAddM.addEventListener("click", function () {
    showAddOns();
});


const nextStep = document.querySelector('.next-step');

nextStep.addEventListener("click", function () {
    showSelectPlan();
});

function showSelectPlan() {
    const selectPlan = document.querySelector('.yearly-plan');
    const secondStep = document.getElementById('select-plan');
    const firstStep = document.getElementById('your-info');
    const yourInfo = document.querySelector('.steps-info');

    selectPlan.style.display = "flex";
    yourInfo.style.display = "none";
    secondStep.checked = true;
}


const nextStep2 = document.querySelector('.button2');

nextStep2.addEventListener("click", function () {
    showAddOns();
});

function showAddOns() {

    const selectPlan = document.querySelector('.monthly-plan');
    const summary = document.querySelector('.monthly-summary');
    const addOns = document.querySelector('.monthly-add-ons');
    const thirdStep = document.getElementById('add-ons');
    
    selectPlan.style.display = "none";
    summary.style.display = "none";
    addOns.style.display = "flex";

    thirdStep.checked = true;
}

const nextStepY = document.querySelector('.buttonY');

nextStepY.addEventListener("click", function () {
    showAddOnsY();
});

function showAddOnsY() {

    const summaryY = document.querySelector('.yearly-summary');
    const addOnsY = document.querySelector('.yearly-add-ons');
    const selectPlan = document.querySelector('.yearly-plan');
    const thirdStep = document.getElementById('add-ons');

    selectPlan.style.display = "none";
    summaryY.style.display = "none";
    addOnsY.style.display = "flex";

    thirdStep.checked = true;
}

const nextStep3 = document.querySelector('.button3');

nextStep3.addEventListener("click", function () {
    showSummary();

});

function showSummary() {

    const summary = document.querySelector('.monthly-summary');
    const addOns = document.querySelector('.monthly-add-ons');
    const fourthStep = document.getElementById('summary');
    

    summary.style.display = "flex";
    addOns.style.display = "none";

    fourthStep.checked = true;
}


const nextStep4 = document.querySelector('.button4');

nextStep4.addEventListener("click", function () {
    showSummaryY();

});

function showSummaryY() {
    ;
    const summaryY = document.querySelector('.yearly-summary');
    const addOnsY = document.querySelector('.yearly-add-ons');
    const fourthStep = document.getElementById('summary');

    summaryY.style.display = "flex";
    addOnsY.style.display = "none";

    fourthStep.checked = true;
}


const buttonConfirm = document.getElementById('confirm');

buttonConfirm.addEventListener("click", function () {
    confirm();
});

function confirm() {
    
    const summary = document.querySelector('.monthly-summary');
    const thankYou = document.querySelector('.thanks');

    thankYou.style.display = "flex";
    summary.style.display = "none";
}

const buttonConfirmY = document.getElementById('confirm-y');

buttonConfirmY.addEventListener("click", function () {
    confirmY();
});

function confirmY() {
    
    const summaryY = document.querySelector('.yearly-summary');
    const thankYou = document.querySelector('.thanks');

    thankYou.style.display = "flex";
    summaryY.style.display = "none";
}

const buttonSelect = document.getElementById('chk');

buttonSelect.addEventListener("click", function () {
    selectPlan();
})


function selectPlan() {
    
    
    const monthlyPlan = document.querySelector('.monthly-plan');
    const yearlyPlan = document.querySelector('.yearly-plan');
    const buttonSelect = document.getElementById('chk');
    const monthly = document.getElementById('monthly')
    const slider = document.querySelector('.slider')

    if (buttonSelect.checked === true) {

        slider.style.transform = 'translateX(15px)';
        monthly.style.color = "hsl(231, 11%, 63%)";
        monthlyPlan.style.display = "flex";
        yearlyPlan.style.display = "none";
    }

    if (buttonSelect.checked === false) {

        monthlyPlan.style.display = "none";
        yearlyPlan.style.display = "flex";
    }
}


