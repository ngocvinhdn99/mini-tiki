import { firstProductList, fourthProductList, secondProductList, thirdProductList } from "./productList"

const finalProductList = []
finalProductList.push(...firstProductList, ...secondProductList, ...thirdProductList, ...fourthProductList)

export default finalProductList