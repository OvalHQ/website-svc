FROM node:18

WORKDIR /usr/src/app
COPY ./application/ .

RUN rm .env || true
RUN touch .env

ARG NEXT_PUBLIC_API_BASE_URL
ARG NEXT_PUBLIC_AIRTABLE_TOKEN
ARG NEXT_PUBLIC_AIRTABLE_BASE_ID
ARG NEXT_PUBLIC_AIRTABLE_TABLE_ID

RUN echo NEXT_PUBLIC_API_BASE_URL=$NEXT_PUBLIC_API_BASE_URL >> .env
RUN echo NEXT_PUBLIC_AIRTABLE_TOKEN=$NEXT_PUBLIC_AIRTABLE_TOKEN >> .env
RUN echo NEXT_PUBLIC_AIRTABLE_BASE_ID=$NEXT_PUBLIC_AIRTABLE_BASE_ID >> .env
RUN echo NEXT_PUBLIC_AIRTABLE_TABLE_ID=$NEXT_PUBLIC_AIRTABLE_TABLE_ID >> .env

RUN npm install
RUN npm run build

EXPOSE 3000
CMD ["npm", "run", "start"]