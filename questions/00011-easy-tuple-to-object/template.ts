/*
 * @Author: wenpei 2737716714@qq.com
 * @Date: 2022-06-07 10:48:24
 * @LastEditors: wenpei 2737716714@qq.com
 * @LastEditTime: 2022-06-08 10:12:42
 * @FilePath: /学习Demo/type-challenges/questions/00011-easy-tuple-to-object/template.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
type TupleToObject<T extends readonly any[]> = {
  [key in T[number]]: key
}