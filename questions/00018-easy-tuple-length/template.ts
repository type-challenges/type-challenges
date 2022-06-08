/*
 * @Author: wenpei 2737716714@qq.com
 * @Date: 2022-06-07 10:48:24
 * @LastEditors: wenpei 2737716714@qq.com
 * @LastEditTime: 2022-06-08 10:42:39
 * @FilePath: /type-challenges/questions/00018-easy-tuple-length/template.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
type Length<T extends readonly any[]> = T['length']

function Length1(arr) {
    return arr.length
} 