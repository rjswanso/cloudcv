import json
import boto3

table=boto3.resource('dynamodb').Table("cloudcvcount")

def lambda_handler(event, context):
    # Update and retrieve visit count
    res = table.update_item(
        Key={"url": "index"},
        UpdateExpression="SET view_count = view_count + :val",
        ExpressionAttributeValues={':val': 1},
        ReturnValues="UPDATED_NEW"
    )
    visit_count = res['Attributes']['view_count']
    # Return the updated visit count
    return {'visit_count':visit_count}