// Código próprio para o exercício

addEventListener('message', tratarTexto);

function tratarTexto(event) {
    let textoInvertido = event.data.reverse();
    postMessage(textoInvertido);
}


// Código retirado do StarkOverflow (https://pt.stackoverflow.com/questions/5943/como-inverter-uma-string-em-javascript/5952)

var ReversalMode = {
    //Assume uma string "normal"
    'PERMISSIVE': 0,
    // Substitui um caracter pelo <?> (U+FFFD REPLACEMENT CHARACTER)
    // quando não o reconhece.
    'STRICT': 1,
    // Por defeito, usar o modo STRICT.
    'DEFAULT': 1,
    // Semelhante a STRICT, mas pode acrescentar code points ao inicio
    // de uma string se esta começar por um combining.
    'COMPLETE_COMBINING': 3,
    // Semelhante a COMPLETE_COMBINING, mas sem substituir caracteres
    // inválidos pelo <?>
    'PERMISSIVE_COMPLETE_COMBINING': 2
};

String.prototype.isHighSurrogate = function () {
    var charCode = this.charCodeAt(0);
    return charCode >= 0xD800 && charCode <= 0xDBFF;
}

String.prototype.isLowSurrogate = function () {
    var charCode = this.charCodeAt(0);
    return charCode >= 0xDC00 && charCode <= 0xDFFF;
};

String.prototype.isCombining = function () {    

    if (this.length != 1) {
        //Todos os caracteres de combinação estão no BMP
        return false;
    }

    var codePoint = this.charCodeAt(0);

    //Combining Diacritical Marks
    if (codePoint >= 0x0300 && codePoint <= 0x036F)
        return true;
    //Combining Diacritical Marks Supplement
    if (codePoint >= 0x1DC0 && codePoint <= 0x1DFF)
        return true;
    //Combining Diacritical Marks for Symbols
    if (codePoint >= 0x20D0 && codePoint <= 0x20FF)
        return true;
    //Combining Half Marks
    if (codePoint >= 0xFE20 && codePoint <= 0xFE2F)
        return true;

    return false;
}

String.prototype.codePoints = function (strictMode) {

    var codePoints = [];

    var currentPoint = '';

    for (var i = 0; i < this.length; ++i) {
        var currentUnit = this[i];

        if (currentUnit.isHighSurrogate()) {
            if (currentPoint.length !== 0 && strictMode) {
                codePoints.push('\uFFFD');
                currentPoint = '';
            }
            else {
                currentPoint += currentUnit;
            }
        } else {
            if (currentUnit.isLowSurrogate() && strictMode &&
               currentPoint.length !== 1) {

                codePoints.push('\uFFFD');
                currentPoint = '';
            } else {
                currentPoint += currentUnit;

                codePoints.push(currentPoint);
                currentPoint = '';
            }
        }
    }

    if (currentPoint !== '') {
        if (strictMode) {
            codePoints.push('\uFFFD');
        }
        else {
            codePoints.push(currentPoint);
        }
    }

    return codePoints;
}

String.prototype.chars = function (strictMode) {
    var chars = [];

    var codePoints = this.codePoints(strictMode);
    var currentChar = '';

    for (var i = 0; i < codePoints.length; ++i) {
        var codePoint = codePoints[i];

        if (!codePoint.isCombining() && currentChar != '') {
            chars.push(currentChar);
            currentChar = '';
        }

        currentChar += codePoint;
    }

    if (currentChar !== '') {
        // Tecnicamente, esta verificação não é necessária para o
        // reverse, porque o join('') trata disso, mas para outros
        // usos de chars() isto evita que nalguns casos fique uma
        // string vazia no final do array (quando o último elemento
        // não é um combinador)
        chars.push(currentChar);
    }

    return chars;
}

String.prototype.reverse = function (reversalMode) {
    if (reversalMode === undefined) {
        reversalMode = ReversalMode.DEFAULT;
    }
    var chars = this.chars(reversalMode & ReversalMode.STRICT);
    if (chars.length > 0 && chars[0].isCombining()) {
        switch (reversalMode) {
            case ReversalMode.COMPLETE_COMBINING:
            case ReversalMode.PERMISSIVE_COMPLETE_COMBINING:
                chars[0] = '\u00A0' + chars[0];
                break;
            case ReversalMode.STRICT:
                chars[0] = '\uFFFD';
                break;
        }
    }
    return chars.reverse().join('');
}