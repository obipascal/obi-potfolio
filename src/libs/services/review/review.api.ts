import { GET, POST, PUT, DROP } from "@/libs/configs/api"
import { reviewEndpoints } from "./review.endpoints"
import { ReviewersData } from "@/types/reviews"

export const CreateReview = async (params: ReviewersData) => {
	return await POST(reviewEndpoints.CREATE, params)
}
