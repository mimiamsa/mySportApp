import { Button } from "@chakra-ui/react";
import { Formik, Form } from "formik";
import * as yup from "yup";
import { Players } from "../pages/teamData";
import { TextField } from './TextField';
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
} from "@chakra-ui/react"
const playerSchema = yup.object().shape({
  name: yup.string().min(2).required("Yo polo mets une string"),
  age: yup.number().min(2).required(),
  lastName: yup.string().min(2).required(),
});

type FormValues = {
  idPlayer: string
  strPlayer: string
  strImg: string
}

// const [inputValue, setInputValue] = useState<string>(playerToUpdate?.strPlayer ?? '')
// const handleChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
//     setInputValue(e.target.value)
// }
// const handleSubmit = () => {
//     onClose()
//     setPlayers(prev => prev.map(player => {
//         return player.idPlayer === id ? { ...player, strPlayer: inputValue } : player
//     }))
// }


export type UpdateFormProps = {
  id: string | null
  isOpen: boolean
  onClose: () => void
  setPlayers: React.Dispatch<React.SetStateAction<Players>>
  playersState: Players
  isModal?: boolean
}

export const FormModal: React.FC<{ isOpen: boolean; onClose: () => void; }> = ({ isOpen, onClose, children }) => {
  return (<Modal isOpen={isOpen} onClose={onClose}>
    <ModalOverlay />
    <ModalContent>
      <ModalHeader>Update player</ModalHeader>
      <ModalCloseButton />
      <ModalBody>
        {children}
        <Button onClick={onClose} variant="secondary">Cancel</Button>
      </ModalBody>
      <ModalFooter>
      </ModalFooter>
    </ModalContent>
  </Modal>)
}



export const PlayerForm: React.FC<UpdateFormProps> = ({ id, isOpen, onClose, playersState, setPlayers, isModal = false }) => {
  const playerToUpdate = playersState.find(player => id === player.idPlayer)

  const formValues: FormValues = {
    idPlayer: Math.floor(Math.random() * 1000).toString(),
    strPlayer: isModal && playerToUpdate ? playerToUpdate?.strPlayer : " ",
    strImg: "https://cdn.pixabay.com/photo/2016/08/08/09/17/avatar-1577909_960_720.png",
  };

  const handleSubmit = (data: FormValues) => {
    console.log(data);
    setPlayers(prev => prev.map(player => {
      return player.idPlayer === id ? { ...player, strPlayer: formValues.strPlayer, strImg: formValues.strImg } : player
    }))
    onClose()
  };

  return (
    isModal ?
      <FormModal isOpen={isOpen} onClose={onClose}>
        <Formik
          onSubmit={handleSubmit}
          initialValues={formValues}
          validationSchema={playerSchema}
        >
          <Form>
            <TextField name="strPplayer" label="Name" />
            <TextField name="strImage" label="Add image" />
            <Button type="submit">Add player</Button>
          </Form>
        </Formik>
      </FormModal> : <Formik
        onSubmit={handleSubmit}
        initialValues={formValues}
        validationSchema={playerSchema}
      >
        <Form>
          <TextField type="text" name="strPplayer" label="Name" />
          <TextField type="text" name="strImage" label="Add image" />
          <Button type="submit">Add player</Button>
        </Form>
      </Formik>
  );
};

