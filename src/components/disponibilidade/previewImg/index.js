import { useEffect, useState } from "react"
import {Container} from "./style"

export default function ImgPreview() {
  const [selectedFile, setSelectedFile]=useState();
  const [preview, setPreview]=useState();

  useEffect(()=>{
    if(!selectedFile){
      setPreview(undefined)
      return;
    }
    const objectUrl = URL.createObjectURL(selectedFile)
    setPreview(objectUrl)
    return()=> URL.revokeObjectURL(objectUrl)
  },[selectedFile])

  const onSelectFile = e => {
    if(!e.target.files || e.target.files.length === 0){
      setSelectedFile(e.target.files[0])
    }
    setSelectedFile(e.target.files[0])
  }
  return (
    <Container>
        {selectedFile && <img src={preview} alt="imagem" id="imgpreview"  width={64} height={64}/>} 
        <label htmlFor='imagemPessoa' id="labelFile">
          <span>Selecionar foto</span>
        </label>
        <input type="file" name="imagemPessoa" id="imagemPessoa" onChange={onSelectFile}/>
    </Container>
  )
}
