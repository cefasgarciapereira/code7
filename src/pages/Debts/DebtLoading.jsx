import { CardSkeleton } from 'elements'

function DebtLoading() {
    return (
        <div className="container">
            <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-2 g-lg-3">
                <div className="col">
                    <CardSkeleton className="p-3" />
                </div>
                <div className="col">
                    <CardSkeleton className="p-3" />
                </div>
                <div className="col">
                    <CardSkeleton className="p-3" />
                </div>
                <div className="col">
                    <CardSkeleton className="p-3" />
                </div>
                <div className="col">
                    <CardSkeleton className="p-3" />
                </div>
                <div className="col">
                    <CardSkeleton className="p-3" />
                </div>
                <div className="col">
                    <CardSkeleton className="p-3" />
                </div>
                <div className="col">
                    <CardSkeleton className="p-3" />
                </div>
                <div className="col">
                    <CardSkeleton className="p-3" />
                </div>
                <div className="col">
                    <CardSkeleton className="p-3" />
                </div>
            </div>
        </div>
    )
}

export default DebtLoading