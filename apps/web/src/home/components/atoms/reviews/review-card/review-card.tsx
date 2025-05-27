import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
  Inline,
  Stack,
} from "@strapi-portfolio/ui";
import { type Review } from "@strapi-portfolio/web/home/models";
import Image from "next/image";

type ReviewCardProps = {
  review: Review;
};

export function ReviewCard({ review }: ReviewCardProps) {
  return (
    <Card className="bg-tertiary dark:bg-secondary/40 min-h-[300px] p-8">
      <CardHeader className="mb-10 pb-0">
        <Inline alignY="center" space="4">
          <Image
            src={review.avatar}
            alt={review.name}
            width={70}
            height={70}
            className="rounded-full"
            priority
          />
          <Stack>
            <CardTitle>{review.name}</CardTitle>
            <p>{review.jobTitle}</p>
          </Stack>
        </Inline>
      </CardHeader>
      <CardDescription className="text-muted-foreground text-lg">
        {review.review}
      </CardDescription>
    </Card>
  );
}
