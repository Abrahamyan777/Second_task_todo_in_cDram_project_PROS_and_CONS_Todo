import css from "./ProsCosn.module.css"

const ProsCons = (props) => {

    return (
        <div className={css.ProsConsContainer}>
            <div className={css.ContentHeader}>
                <h1>{props.cons}</h1>
            </div>
            <div className={css.Items}>
                <ol>
                    {
                        props.list.map(({ id, title }, index) => {
                            return props.edit == id ?
                                <li key={index} ><input onClick={(e) => e.stopPropagation()}
                                    onChange={(e) => props.handleChange(e, index)}
                                    value={props.newValue} /></li>
                                : <li key={index} onClick={() => props.handleClick(id, title)}>{title}</li>
                        })
                    }
                </ol>
            </div>
        </div>
    )
}

export default ProsCons;