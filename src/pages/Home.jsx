import React,{ useState, useEffect} from 'react'
import { useStateContext} from "../context/contract";
import { List } from "../components/organisms/list";

const Home = () => {
    const [isLoading, setIsLoading] = useState(true)
    const [campaigns, setCampaigns] = useState([])

    const { address, contract, getCampaigns } = useStateContext()

    const fetchCampaigns = async () => {
        const campaigns = await getCampaigns()
        setCampaigns(campaigns)
        setIsLoading(false)
    }

    useEffect(() => {
        if(contract) {
           fetchCampaigns().then(r => console.log("campaigns", r))
        }
    }, [address, contract])
    return (
        <List
            isLoading={isLoading}
            campaigns={campaigns}
            title={`All ${campaigns.length > 1 ? "Campaigns" : "Campaign"}`}
        />
    );
}

export default Home
