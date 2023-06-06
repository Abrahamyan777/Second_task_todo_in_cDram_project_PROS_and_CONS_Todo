import { useDispatch, useSelector } from "react-redux";
import ProsCons from "../ProsCons/ProsCons";
import css from "./Main.module.css"
import { addList1AC, addList2AC, filList1AC, filList2AC } from "../../redux-store/actionCreator/addListAC";
import { useState } from "react";

const Main = () => {
    const dispatch = useDispatch()
    const { list1 } = useSelector(state => state.prosReducers);
    const { list2 } = useSelector((state) => state.consReducers);

    const [edit1, setEdit1] = useState("");
    const [newValue1, setNewValue1] = useState('')

    const handleChange1 = (e, index) => {
        setNewValue1(e.target.value)
        let lol = e.target.value;
        list1[index].title = lol
        if ((list1[list1.length - 1].title != "" && list1.length < 10 )) {
            let newList = {
                id: list1[list1.length - 1].id + 1,
                title: ''
            }
            dispatch(addList1AC(newList))
        }
        fil1(e, index);
    }
    const fil1 = (e, index) => {
        if (e.target.value == '') {
            let x1 = list1.filter((el) => list1.indexOf(el) != index)
            dispatch(filList1AC(x1))
        }
    }
    const handleClick1 = (id, title) => {
        setEdit1(id)
        setNewValue1(title)
    }
    // second components 
    
    const [edit2, setEdit2] = useState("");
    const [newValue2, setNewValue2] = useState('')

    const handleChange2 = (e, index) => {
        setNewValue2(e.target.value)
        let lol = e.target.value;
        list2[index].title = lol
        if ((list2[list2.length - 1].title != "" && list2.length < 10 )) {
            let newList = {
                id: list2[list2.length - 1].id + 1,
                title: ''
            }
            dispatch(addList2AC(newList))
        }
        fil2(e, index);
    }
    const fil2 = (e, index) => {
        if (e.target.value == '') {
            let x2 = list2.filter((el) => list2.indexOf(el) != index)
            console.log(x2);
            dispatch(filList2AC(x2))
        }
    }
    const handleClick2 = (id, title) => {
        setEdit2(id)
        setNewValue2(title)
        console.log(edit2);
    }


    // 
    const handleIf = () => {
        if (edit1 != '' && newValue1 != "") {
            setEdit1('')
        }
        if (edit2 != '' && newValue2 != "") {
            setEdit2('')
        }
    }
    return (
        <div className={css.mainWrapper} onClick={() => handleIf()}>
            <div className={css.mainContainer}>
                <div className={css.mainInner}>
                    <ProsCons cons="PROS"
                        list={list1}
                        handleClick={handleClick1}
                        handleChange={handleChange1}
                        newValue={newValue1}
                        edit={edit1} />
                    <ProsCons cons="CONS"
                        list={list2}
                        handleClick={handleClick2}
                        handleChange={handleChange2} 
                        newValue={newValue2}
                        edit={edit2}
                        />
                </div>
            </div>
        </div>
    )
}

export default Main;