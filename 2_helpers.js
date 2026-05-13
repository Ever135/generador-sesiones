// 2_helpers.js

const { TextRun, Paragraph } = require("docx");
const { FONT } = require("./1_config");

// texto
function tx(text, opts = {}) {
  return new TextRun({
    text,
    font: FONT.FAMILY,
    size: opts.size || FONT.SIZE_BASE,
    bold: opts.bold,
    color: opts.color,
    italics: opts.italic
  });
}

// párrafo
function p(content) {
  return new Paragraph({
    children: Array.isArray(content) ? content : [tx(content)]
  });
}

// título
function h3(text, color = "000000") {
  return new Paragraph({
    children: [tx(text, { bold: true, size: FONT.SIZE_SUBTITLE, color })]
  });
}

// subtítulo
function h2(text, color = "000000") {
  return new Paragraph({
    children: [tx(text, { bold: true, size: FONT.SIZE_TITLE, color })]
  });
}

module.exports = {
  tx,
  p,
  h2,
  h3
};
