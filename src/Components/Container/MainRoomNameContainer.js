import MainRoomNamePresenter from "../Presenter/MainRoomNamePresenter";
import { useSelector } from "react-redux";
import styled from "styled-components";
import { AiOutlinePlusCircle } from 'react-icons/ai';
import { useState } from "react";
import InviteRoom from "./InviteRoom";

const RoomName = styled.p`
    color:white;
    font-size:20px;
    margin: 0;
`

const MainRoomNameContainer = ({ selectRoom }) => {
    const store = useSelector(state => state);
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);

    const [InputId, setInputId] = useState('');

    const InvitePerson = () => {
        console.log(InputId)
    }

    const changeInputId = (e) => {
        setInputId(e.target.value)
    }

    return (
        <MainRoomNamePresenter>
            <RoomName>{selectRoom !== 0 && store.rooms[selectRoom - 1].name}</RoomName>
            {selectRoom !== 0 && <AiOutlinePlusCircle onClick={() => setShow(true)} />}
            <InviteRoom set={show} setShow={handleClose} InvitePerson={InvitePerson} changeInputId={changeInputId} />
        </MainRoomNamePresenter>
    )
}

export default MainRoomNameContainer;