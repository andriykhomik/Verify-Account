const codes = document.querySelectorAll('.code')

let i = 0;

codes[i].focus();


codes.forEach((code, idx) => {
    code.addEventListener('keydown',  (e) => {

        setTimeout(()=> {
            codes.forEach(code => {

                if (code.value.length > 1){
                    code.value.split('').map((item, idx) => {
                        i = idx;
                        codes[i].value = item;
                        setTimeout(() => codes[i].focus(), 10);
                    });
                }
            });
        }, 20)

        if(e.key >= 0 && e.key <= 9) {
            i = idx;
            if (i >= codes.length - 1){
                i = codes.length - 1;
                codes[i].value = '';
                setTimeout(() => codes[i].focus(), 10);
            } else {
                codes[i].value = ''
                setTimeout(() => codes[i + 1].focus(), 10);
            }
        } else if(e.key === 'Backspace') {
            if (i <= 1){
                setTimeout(() => codes[i].focus(), 10);
            }else {
                setTimeout(() => codes[i - 1].focus(), 10);
            }
        }
        i = idx;
        codes[i].focus();
    })
})


