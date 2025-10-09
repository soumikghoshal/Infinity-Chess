//black pieces
function blackPawn(current_position) {
    return {
        current_position,
        img: "imeges/pieces/chess_com_png/black/bp.png",
    };
}

function blackRook(current_position) {
    return {
        current_position,
        img: "imeges/pieces/chess_com_png/black/br.png",
    };
}

function balckKnight(current_position) {
    return {
        current_position,
        img: "imeges/pieces/chess_com_png/black/bn.png",
    };
}

function balckBishop(current_position) {
    return {
        current_position,
        img: "imeges/pieces/chess_com_png/black/bb.png",
    };
}

function blackQueen(current_position) {
    return {
        current_position,
        img: "imeges/pieces/chess_com_png/black/bq.png",
    };
}

function blackKing(current_position) {
    return {
        current_position,
        img: "imeges/pieces/chess_com_png/black/bk.png",
    };
}

//white pieces
function whitePawn(current_position) {
    return {
        current_position,
        img: "/imeges/pieces/chess_com_png/white/wp.png",
    };
}

function whiteRook(current_position) {
    return {
        current_position,
        img: "imeges/pieces/chess_com_png/white/wr.png",
    };
}

function whiteKnight(current_position) {
    return {
        current_position,
        img: "imeges/pieces/chess_com_png/white/wn.png",
    };
}

function whiteBishop(current_position) {
    return {
        current_position,
        img: "imeges/pieces/chess_com_png/white/wb.png",
    };
}

function whiteQueen(current_position) {
    return {
        current_position,
        img: "imeges/pieces/chess_com_png/white/wq.png",
    };
}

function whiteKing(current_position) {
    return {
        current_position,
        img: "imeges/pieces/chess_com_png/white/wk.png",
    };
}

export {
    blackPawn,
    blackRook,
    balckBishop,
    balckKnight,
    blackQueen,
    blackKing,
    whitePawn,
    whiteRook,
    whiteBishop,
    whiteKnight,
    whiteQueen,
    whiteKing,
};