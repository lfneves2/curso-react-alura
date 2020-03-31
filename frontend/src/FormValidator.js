import validator from 'validator';

class FormValidator{

    constructor(validacoes){
        this.validacoes = validacoes;
    }

    valida(state){
        let validacao = this.valido();

        this.validacoes.forEach(regra => {
           
            const campo = state[regra.campo];
            const args = regra.args || [];

            const metodo = typeof regra.metodo === 'string' ? validator[regra.metodo] : regra.metodo;

            if(metodo(campo, ...args, state) !== regra.validoQuando){
                validacao[regra.campo] = {
                    isInvalid: true,
                    message: regra.mensagem
                }
                validacao.IsValid = false;
            } 
            
        });

        return validacao;       
    }

    valido(){
        const validacao = {};

        this.validacoes.map(regra => (
            validacao[regra.campo] = {isInvalid: false, message: ''}
        ));

        return {IsValid: true, ...validacao};
    }

}

export default FormValidator;