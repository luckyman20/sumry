import React from "react";
import { Card, Typography } from "@material-ui/core";

const ListCard = ({id, title, status}) => {
    return (
        <Card className="listCard">
            <Typography variant="h6">{id}</Typography>
            <Typography variant="h6">{title}</Typography>
            <Typography variant="h6">{status}</Typography>
        </Card>
    )
};

export default ListCard;