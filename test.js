const parser = require('./officeParser');

parser.setDecompressionLocation('./temp/');
parser.parseWordAsync('test.docx').then((ret, err)=>{
    console.log(ret)

})
//parser.parseWord('test.docx')
