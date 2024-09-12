import { conexao } from '../config/conexao'

export const createUser = async(name: string, email: string, password: string, date_birthday: string, cell: string): Promise<void> => {
  const pool = await conexao()
  await pool.request()
  .input('NAME', name)
  .input('EMAIL', email)
  .input('PASSWORD', password)
  .input('DATE_BIRTHDAY', date_birthday)
  .input('CELL', cell)
  .query(`
    INSERT INTO Users (name, email, password, date_birthday, cell)
    VALUES (@NAME, @EMAIL, @PASSWORD, @DATE_BIRTHDAY, @CELL)
  `)
}