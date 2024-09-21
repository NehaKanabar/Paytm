export const Balance = ({ value }) => {
    return (
        <div className="flex">
            <div className="font-bold text-lg">Your Balance</div>
            <div className="font-semibold ml-4">Rs {value}</div>
        </div>
    );
};
