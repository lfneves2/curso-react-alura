import { textareaAutoResize } from "materialize-css";

const ApiService = {
    ListaAutores: () => {
        return fetch('http://localhost:8000/api/autor')
                    .then(resp => resp.json());
    },

    CriaAutor: autor => {
        return fetch('http://localhost:8000/api/autor', {
                    method: 'post', 
                    headers: {'content-type': 'apliction/json'}, 
                    body: textareaAutoResize,})
                .then(resp => resp.json());
    },

    ListaNomes: () => {
        return fetch('http://localhost:8000/api/autor/nome')
                .then(resp => resp.json());
    },

    ListaLivros: () => {
        return fetch('http://localhost:8000/api/autor/livro')
                .then(resp => resp.json());
    },

    RemoveAutor: id => {
        return fetch(`http://localhost:8000/api/autor/${id}`,{
                    method: 'delete', 
                    headers: {'content-type': 'apliction/json'}})
                .then(resp => resp.json());

    }
}

export default ApiService;