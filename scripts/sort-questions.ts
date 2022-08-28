import fs from 'fs'
import path from 'path'

function sortQuestions() {
  makeDirs()
  fs.readdir(path.join(__dirname, '../questions'), (err, files) => {
    if (err)
      console.log(err)
    files.forEach((file) => {
      if (file.includes('-warm-'))
        renameFile(file, 'warm')
      if (file.includes('-easy-'))
        renameFile(file, 'easy')
      else if (file.includes('-medium-'))
        renameFile(file, 'medium')
      else if (file.includes('-hard-'))
        renameFile(file, 'hard')
      else if (file.includes('-extreme-'))
        renameFile(file, 'extreme')
    })
  })
}

function renameFile(file: string, folder: string) {
  const oldPath = `${path.join(__dirname, '../questions', file)}`
  const newPath = `${path.join(__dirname, `../questions/${folder}`, file)}`
  fs.rename(oldPath, newPath, (err) => {
    if (err)
      console.log(err)
  })
}

function makeDirs() {
  const questionFolders = ['warm', 'easy', 'medium', 'hard', 'extreme']
  questionFolders.forEach((folder) => {
    const dir = path.join(__dirname, `../questions/${folder}`)
    if (!fs.existsSync(dir))
      fs.mkdirSync(dir)
  })
}

sortQuestions()

