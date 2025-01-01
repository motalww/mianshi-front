const { generateService } = require("@umijs/openapi");

generateService({
    requestLibPath: "import request from '@/libs/request'", //查找自己封装的request进行接口生成
    schemaPath: "http://localhost:8101/api/v2/api-docs", //接口文档地址
    serversPath: "./src",
});