
    //pedir um numero para o usuario e gerar a tabuada do numero especificado
   
        console.log ("Olá! Qual numero gostaria de gerar a tabuada hoje? ")

            let numero

                process.stdin.on('data', function(data){
                    let input = data.toString().trim()

                        if (!numero) {
                            numero = +input
                                if (numero >= 1 && numero <= 10) {
                                    for ( let i = 1; i <= 10; i++) {
                                        console.log (`${numero} x ${i} é igual a ${numero * i}`)
                                    }
                                } else {
                                    console.log ("Numero nao esta no intervalo válido entre 1 e 10")
                                } 
                        }
                })