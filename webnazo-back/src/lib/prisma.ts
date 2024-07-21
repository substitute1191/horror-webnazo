import { PrismaClient } from "@prisma/client"

const db = new PrismaClient()
// * prismaからデータを操作するためのクライアント
// * PrismaClientは各モデルに対応したフィールドを持っている
// * 各モデルにアクセスし、そこからCRUD操作を行う

export { db }
