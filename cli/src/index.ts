import { Command } from 'commander'
import { onCreate } from '../command/create'

const cmd = new Command()

// 注册命令 参数以及用户传入之后的回调函数
// $ tsnd ./src/index.ts create
cmd
  .command('create')
  .description('创建一个组件模板或配置文件')
  // 添加命令参数 -t | --type, <type>  表明为必选参数
  .option('-t --type <type>', '创建类型, 可选值: component, lib-entry')
  .action(onCreate)

//执行命令行参数的解析
cmd.parse()
