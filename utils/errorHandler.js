function ErrorMessage(status, errors,[errorStatus]) {
    const msg = {
        "status": status,
        "message": "Parâmetros inválidos",
        "errors": [{
            status: ""
        }
        ]
    }
    const error = errors === "status" ? `O campo 'status' pode ser somente 'aberto' ou 'solucionado, o valor ${errorStatus} não é válido' ` : `"O campo ${errors} precisa ser preenchido corretamente."`;
    msg.errors[0].status = error;
    return msg;

}
function ErrorMessageID(status, id, objeto) {

    const msg = {
        "status": status,
        "message": `O ID ${id}  do ${objeto} não foi encontrado`,
        "errors": [{
            status: `O ID ${id}  do ${objeto} não foi encontrado na base de dados`
        }
        ]
    }

    return msg;
}
function ErrorMessageCustom(status, message) {
  return {
    status,
    error: true,
    message,
  };
}

module.exports = {
    ErrorMessage,
    ErrorMessageID,
    ErrorMessageCustom
}