import { Button } from '@chakra-ui/react'
import { firebaseClient } from '../../config/firebase'

export const Agenda = () => {
  const logout = () => firebaseClient.auth().signOut()

  return (
    <div>
      <h1>Agenda Testando</h1>
      <Button onClick={logout}>Sair</Button>
    </div>
  )
}
