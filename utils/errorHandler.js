function ErrorMessage(status, errors) {
    const msg = {
        "status": status,
        "message": "Parâmetros inválidos",
        "errors": [{
            status: ""
        }
        ]
    }
    const error = errors === "status" ? "O campo 'status' pode ser somente 'aberto' ou 'solucionado' " : `"O campo ${errors} precisa ser preenchido corretamente"`;
    msg.errors[0].status = error;
    return msg;

}

module.exports = {
    ErrorMessage
}