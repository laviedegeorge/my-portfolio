const dropDownBtn = document.getElementById('dropDownBtn');
dropDownBtn.addEventListener('click', () => {
    if (navCont.style.display === 'block') {
        navCont.style.display = 'none';
    } else {
        navCont.style.display = 'block';
    }
    
})