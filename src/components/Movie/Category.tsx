
interface Props {
    category: string
}

const Category = ({category}:Props) => {
    return (
        <div className="d-grid gap-2 mb-4">
            <button className="btn btn-primary" type="button">
                {category}
            </button>
        </div>

    )
}

export default Category