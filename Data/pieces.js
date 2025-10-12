//black pieces
function blackPawn(current_position) {
    return {
        current_position,
        img: "imeges/pieces/chess_com_png/black/bp.png",
        piece_name: "BLACK_PAWN",
    };
}

function blackRook(current_position) {
    return {
        current_position,
        img: "imeges/pieces/chess_com_png/black/br.png",
        piece_name: "BLACK_ROOK",
    };
}

function balckKnight(current_position) {
    return {
        current_position,
        img: "imeges/pieces/chess_com_png/black/bn.png",
        piece_name: "BLACK_KNIGHT",
    };
}

function balckBishop(current_position) {
    return {
        current_position,
        img: "imeges/pieces/chess_com_png/black/bb.png",
        piece_name: "BLACK_BISHOP",
    };
}

function blackQueen(current_position) {
    return {
        current_position,
        img: "imeges/pieces/chess_com_png/black/bq.png",
        piece_name: "BLACK_QUEEN",
    };
}

function blackKing(current_position) {
    return {
        current_position,
        img: "imeges/pieces/chess_com_png/black/bk.png",
        piece_name: "BLACK_KING",
    };
}

//white pieces
function whitePawn(current_position) {
    return {
        current_position,
        img: "/imeges/pieces/chess_com_png/white/wp.png",
        piece_name: "WHITE_PAWN",
    };
}

function whiteRook(current_position) {
    return {
        current_position,
        img: "imeges/pieces/chess_com_png/white/wr.png",
        piece_name: "WHITE_ROOK",
    };
}

function whiteKnight(current_position) {
    return {
        current_position,
        img: "imeges/pieces/chess_com_png/white/wn.png",
        piece_name: "WHITE_KNIGHT",
    };
}

function whiteBishop(current_position) {
    return {
        current_position,
        img: "imeges/pieces/chess_com_png/white/wb.png",
        piece_name: "WHITE_BISHOP",
    };
}

function whiteQueen(current_position) {
    return {
        current_position,
        img: "imeges/pieces/chess_com_png/white/wq.png",
        piece_name: "WHITE_QUEEN",
    };
}

function whiteKing(current_position) {
    return {
        current_position,
        img: "imeges/pieces/chess_com_png/white/wk.png",
        piece_name: "WHITE_KING",
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