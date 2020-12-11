/*
 * @Author: xinghe
 * @LastEditors: xinghe
 * @Date: 2020-10-17 10:22:30
 * @FilePath: /yeoman/generator-my/generators/app/index.js
 * @LastEditTime: 2020-10-17 10:57:13
 * @不想有bug xinghe@gaoding.com
 */
const Generator = require('yeoman-generator');
const yosay = require("yosay");


class My extends Generator {
    // 初始化函数
    initializing() {
        this.props = {};
    }
    // 接受用户输入
    prompting() {
        // Have Yeoman greet the user.
        this.log(
            yosay(
                `欢迎来到我的yeoman测试脚手架`
            )
        );
        // 命令对话
        const prompts = [
            {
                type: "input",
                name: "name",
                message: "您的名字为？",
                default: '我没有名字'
            },
            {
                type: "input",
                name: "sex",
                message: "您的性别为为？",
                default: '男'
            },{
                type: "input",
                name: "age",
                message: "您多大了？",
                default: 18
            }
        ];

        return this.prompt(prompts).then(props => {
            this.props = props;
        });
    }

     // 写文件
  writing() {
    this.fs.write(
        this.destinationPath('userInfo.txt'),
        JSON.stringify({...this.props})
    )
  }

}

module.exports = My