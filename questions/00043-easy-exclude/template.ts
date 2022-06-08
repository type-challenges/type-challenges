/*
 * @Author: wenpei 2737716714@qq.com
 * @Date: 2022-06-07 10:48:24
 * @LastEditors: wenpei 2737716714@qq.com
 * @LastEditTime: 2022-06-08 12:10:22
 * @FilePath: /type-challenges/questions/00043-easy-exclude/template.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
type MyExclude<T, U> = T extends U ? never : T

type a = Exclude<'a' | 'b' | 'c', 'a'>

