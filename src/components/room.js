import Table from "./table";

const Room = (tables) => {
    return (
        <>
            {tables?.map((table, i) => {
                return (
                    <Table props={table.id}>
                    </Table>
                )
            })
            }

        </>
        )

}

export default Room;