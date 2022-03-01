
interface Props {
    category: string
}

const Category = ({category}:Props) => {
    return (
        <div className="d-flex justify-content-center mb-4">
            <button className="btn btn-primary" style={{width:"85%"}} type="button">
                {category}
            </button>
        </div>

    )
}

export default Category