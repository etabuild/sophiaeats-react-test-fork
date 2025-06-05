import {modalContentAtom, isOpenModalAtom} from "../../../atoms.ts";
import {useAtom} from "jotai";
import type {ReactNode} from "react";

export const useModal = () => {
    const [isOpenModal, setIsOpenModal] = useAtom(isOpenModalAtom)
    const [modalContent, setModalContent] = useAtom(modalContentAtom)
    const openModal = (modalContent:ReactNode) => {
        setIsOpenModal(true)
        setModalContent(modalContent)
    }
    const closeModal = () => {
        setIsOpenModal(false)
        setModalContent(undefined)
    }
    return {openModal, closeModal, isOpenModal, modalContent}
}

export function Modal() {

    const {modalContent, isOpenModal, closeModal} = useModal()
    return (
        <>
            {isOpenModal && <div>
                <div style={{
                    position: 'fixed',
                    inset: 0,
                    backgroundColor: '#00000088',
                    zIndex: 998,
                }}>

                </div>
                <div style={{
                    position: 'fixed',
                    width: '80vw',
                    height: '380px',
                    background: '#FFE6CE',
                    borderRadius: '35px',

                    left: '50%',
                    top: '50%',
                    transform: 'translateX(-50%) translateY(-50%)',
                    zIndex: 999,

                }}>
                    <div style={{
                        position: 'absolute',
                        top: 0,
                        width: '100%',
                        height: '50px',
                    }}>
                      {/* <button style={{
                            position: 'absolute',
                            right: 0,
                            height: '40px',
                            width: '40px',
                            borderRadius: '20px',
                            marginRight: '5px',
                            marginTop: '5px',
                            border: 'none'
                        }}
                        onClick={() => {
                            closeModal()
                        }}>
                        <span className={"material-symbols-rounded"}>
                            close
                        </span>
                        </button>*/}
                    </div>
                    {modalContent}
                </div>
            </div>}
        </>
    )
}